
```markdown
> 📖 **New to this?** See the full [step-by-step guide](HOW-TO-USE.md).

🚀 Bulk remove all your TikTok reposts in seconds — a fast, one-click browser console script.

# TikTok Repost Remover

> 🚀 **One-click script to bulk remove all your reposted videos on TikTok.**

A fast and efficient JavaScript script for the browser console that automatically removes all reposted videos from your TikTok profile. This is a simplified and accelerated version of the classic script.

## ⚠️ Important Disclaimer

*   **Use at your own risk.** Automating actions on TikTok may be against their Terms of Service.[reference:3]
*   **UI Changes.** This script relies on specific webpage elements and may stop working if TikTok updates its user interface.[reference:4]
*   **Account Safety.** Running the script too fast might trigger anti-bot measures. It is recommended to start with a slower speed.

## ✨ Features

*   **One-Click Deletion:** Automatically removes reposts without the need to click the "Share" button.
*   **Ultra-Fast:** Operates with a direct click on the repost button, making the process 2-3 times faster than other methods.
*   **Customizable Speed:** You can easily adjust the delay between actions to avoid account flags.
*   **Easy Control:** Built-in command to stop the script at any time.

## 📋 How to Use

1.  Open **`TikTok.com`** in your browser and go to your **profile**.
2.  Click on one of your reposted videos to open it in full-screen mode.[reference:5]
3.  Open the browser's **Developer Tools** (Press `F12`) and go to the **`Console`** tab.[reference:6]
4.  Copy and paste the entire script from **`script.js`** into the console and press **`Enter`**.[reference:7]

## 🛑 How to Stop

**`window.stopFast = true;`**

## ⚙️ Customization (Speed Control)

You can adjust the script's speed by changing the `DELAY` variable at the beginning of the script.

```javascript
const DELAY = 400; // Delay in milliseconds between videos. Default is 400ms.

