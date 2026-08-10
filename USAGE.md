# 📖 How to Use TikTok Repost Remover

This guide will walk you through every step to successfully remove all your reposted videos using the script.

---

## 🧭 What You'll Need

- A **desktop browser** (Chrome, Edge, Firefox, or Brave)
- Your **TikTok account** logged in on the browser
- A few minutes of your time (the script does the heavy lifting!)

---

## 🚀 Step-by-Step Instructions

### 1. Open TikTok and Go to Your Reposts

- Go to [**tiktok.com**](https://www.tiktok.com) and log in if you aren't already.
- Click on your **profile icon** (top right) to go to your profile page.
- Click on the **"Reposts"** tab (look for the icon with two arrows 🔁).

### 2. Open Any Reposted Video

- Click on **one** of your reposted videos to open it in the **full-screen player**.
- **Important:** The video must be open in the player (not just the grid view).

### 3. Open Developer Tools

- Press **`F12`** on your keyboard (or `Ctrl+Shift+I` on Windows/Linux, `Cmd+Option+I` on Mac).
- This will open the Developer Tools panel.
- Click on the **`Console`** tab at the top of the panel.

### 4. Paste the Script

- Go to the main [**script.js**](script.js) file in this repository.
- Click the **"Raw"** button to see the raw code, then **copy the entire script**.
- Return to the browser console, **paste** the code, and press **`Enter`**.

### 5. Watch It Work!

- The script will start running immediately.
- You'll see log messages in the console:
- 🚀 Starting fast deletion (direct click)
- ✅ Deleted: 1
- ✅ Deleted: 2
- ...

- The script will automatically move to the next video after each deletion.

---

## 🛑 How to Stop the Script

- To stop at any time, type this into the console and press **`Enter`**:
```javascript
window.stopFast = true;

    The script will finish the current video and stop. The total number of deleted reposts will be shown.
```

⚙️ Adjusting the Speed

If the script is running too fast (risking a CAPTCHA) or too slow for your liking, you can change the DELAY value.

    Open the script in a text editor or directly in the console before pasting.

    Find this line near the top:
    javascript

    const DELAY = 400; // milliseconds between videos

    Change the number to your desired speed:

        Safer: 800 – 1000 (recommended for beginners)

        Faster: 200 – 300 (use with caution)

    Paste the updated script into the console and run it.

❗ Troubleshooting
Problem	Solution
Script does nothing or says "Repost button not found"	TikTok may have changed its UI. Try refreshing the page and reopening a video. If the problem persists, open an issue on GitHub.
TikTok shows a CAPTCHA or blocks you	The script is running too fast. Increase DELAY to 800 or higher and try again.
The "next" button doesn't appear	You've reached the end of your repost list. The script will reload the page to load more videos (if available).
Script stops unexpectedly	Check the console for error messages. You can manually restart by pasting the script again.
📱 Can I Use This on Mobile?

No. This script is designed for the desktop web version of TikTok. It will not work on the mobile app or mobile browser. For mobile, you'll need to delete reposts manually via the app.
💡 Pro Tips

    Run the script when you have a stable internet connection.

    Close other tabs to reduce browser load.

    If you have hundreds of reposts, consider taking breaks (stop and restart later) to avoid rate-limiting.

🤝 Need More Help?

    Open an Issue on GitHub.

    Check the README for general information and disclaimer.

Happy cleaning! 🧹✨

