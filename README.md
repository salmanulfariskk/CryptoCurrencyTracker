 📊 Crypto Currency Tracker

 A full-stack cryptocurrency tracking dashboard built using the **MERN stack** that fetches real-time data from CoinGecko, stores historical snapshots hourly, and displays live top-10 cryptocurrency metrics with filtering, search, and chart views.

---

## 🧰 Tech Stack Used

- **Frontend:** React + Vite + Tailwind CSS + Framer Motion  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (MongoDB Atlas)  
- **Charting:** Chart.js + react-chartjs-2  
- **Scheduling:** node-cron  
- **Deployment:** Vercel (frontend), Render (backend)

---

## ⚙️ Setup and Installation Steps

> Make sure you have Node.js, npm, and a MongoDB Atlas URI before starting.

### 🔧 Backend Setup

```bash
git clone https://github.com/salmanulfariskk/CryptoCurrencyTracker.git
cd CryptoCurrencyTracker/server
npm install
````

Create a `.env` file inside `/server`:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

---

### 🎨 Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

Now open: [http://localhost:5173](http://localhost:5173)

---

## ⏱ How Your Cron Job Works

* The project uses [`node-cron`](https://www.npmjs.com/package/node-cron) to schedule a background task that runs **every 1 hour**.
* This cron job:

  * Fetches the **top 10 cryptocurrencies** using CoinGecko API.
  * Stores a **snapshot of current price, market cap, 24h change, and timestamp** in MongoDB under the `History` collection.
* This data is used to generate historical charts for each coin.

📁 Cron code is located in:

```
/server/cron.js
```

It is loaded in `index.js` using:

```js
import './cron.js'
```

---

## 🔗 Deployed Links

* 🌐 **Live (Vercel):**
  https://crypto-currency-tracker-seven.vercel.app/


* 📂 **GitHub Repo:**
  (https://github.com/salmanulfariskk/CryptoCurrencyTracker)

---

Feel free to ⭐️ this project and contribute to its growth!

```


