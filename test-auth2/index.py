import os
import requests
from flask import Flask, redirect, request, url_for

app = Flask(__name__)

# Discord applicatie-instellingen
CLIENT_ID = 'YOUR_CLIENT_ID'
CLIENT_SECRET = 'YOUR_CLIENT_SECRET'
REDIRECT_URI = 'http://localhost:5000/callback'
SCOPE = 'identify'
DISCORD_API_URL = 'https://discord.com/api/v10'

# Route naar de homepage
@app.route('/')
def home():
    # Genereer de Discord OAuth2 URL
    auth_url = f'https://discord.com/oauth2/authorize?client_id=1353411961395613796&redirect_uri=https://discord.com/oauth2/authorize?client_id=1353411961395613796&response_type=code&redirect_uri=https%3A%2F%2Fstenstudio.vercel.app%2Ftest-auth2%2Fapp.py&scope=identify+guilds+email+activities.read+openid&response_type=code&scope={SCOPE}'
    return redirect(auth_url)

# Callback route voor het ontvangen van de autorisatiecode
@app.route('/callback')
def callback():
    # Verkrijg de autorisatiecode uit de queryparameters
    code = request.args.get('code')

    if not code:
        return 'Error: No code received', 400

    # Vraag een access token aan met de autorisatiecode
    data = {
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'code': code,
        'grant_type': 'authorization_code',
        'redirect_uri': REDIRECT_URI,
        'scope': SCOPE
    }
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    response = requests.post('https://discord.com/api/v10/oauth2/token', data=data, headers=headers)
    token_data = response.json()

    if 'access_token' not in token_data:
        return 'Error: Could not retrieve access token', 400

    access_token = token_data['access_token']

    # Verkrijg gebruikersinformatie van Discord
    user_info_response = requests.get(
        f'{DISCORD_API_URL}/users/@me',
        headers={'Authorization': f'Bearer {access_token}'}
    )

    user_info = user_info_response.json()

    # Toon de gebruikersnaam van de Discord-gebruiker
    return f'Hello, {user_info["username"]}#{user_info["discriminator"]}'

if __name__ == '__main__':
    app.run(debug=True)
