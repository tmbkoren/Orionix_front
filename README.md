# Orionix (frontend)
---
This is the frontend portion for **Orionix**, a mobile app that lets users find stargazing events and give them realistic guidance regarding whether or not they can experience the event.

Orionix was ***developed in 24 hours*** for [FullyHacks 2025](https://fullyhacks.acmcsuf.com/) Hackathon by me and [Batu Demirtaş](https://github.com/Batu-end).

**[View the Backend Repository](https://github.com/Batu-end/Orionix-backend)**

---

# App Preview

<p align="center">
  <img src="./images/OrionixMainMenu.png" alt="Main Menu" width="35%">
  <br>
  <em>The Main Menu prompts users for their location to find nearby events (background is animated).</em>
</p>
<p align="center">
  <img src="./images/OrionixEvents.png" alt="Events List" width="35%">
  <br>
  <em>The Events screen shows upcoming celestial events, sorted by rarity and viewing conditions.</em>
</p>
<p align="center">
  <img src="./images/OrionixMap.png" alt="Stargazing Map" width="35%">
  <br>
  <em>The Map screen displays nearby locations with low light pollution, perfect for stargazing.</em>
</p>

---

# Key Features

#### 📍 Dynamic Location Input
* Automatically detects user location via a native pop-up for immediate results.
* Provides a manual zip code entry as a fallback for privacy or if permissions are denied.

#### ✨ Smart Event Feed
* **Weather Integration:** Uses the OpenWeather API to provide a "go" or "no-go" sentiment for viewing conditions.
* **Rarity System:** A custom algorithm ranks celestial events by rarity to highlight unique opportunities.
* **Custom Sorting:** Users can sort events to easily find what they're looking for.

#### 🗺️ Optimal Location Finder
* **Intelligent Search:** Leverages the Google Places API to find nearby locations with low light pollution, such as parks, trails, and hills.
* **Interactive Map:** Displays recommended spots on a map centered on the user's location.
* **Instant Directions:** Users can tap any location to get its name and look for directions.

---

# How it works:

<img src="./images/OrionixFlow.png" alt="alt text" width="90%">

---

# Tech Stack

* **Hosting:** [Railway](https://railway.com/) - Cloud application hosting.
* **Backend:** [FastAPI](https://fastapi.tiangolo.com/) - A modern, high-performance Python web framework.
* **Frontend:** [React Native](https://reactnative.dev/) - Cross-platform mobile app development.
* **APIs:**
    * [OpenWeather API](https://openweathermap.org/api) - Used to gather weather data for viewing conditions.
    * [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview) - Used to find optimal stargazing locations.

---

# Getting Started

Follow these instructions to get the backend running on your local machine.

### Prerequisites

- NodeJS

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/tmbkoren/Orionix_front.git
    cd Orionix_front
    ```


2.  **Install the dependencies:**
    ```sh
    npm install
    ```
    
3.  **Run the application:**
    ```sh
    expo start
    ```
