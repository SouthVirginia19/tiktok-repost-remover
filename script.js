// ==UserScript==
// @name         TikTok Repost Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically removes all reposted videos from your TikTok profile.
// @author       Your Name
// @match        https://www.tiktok.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiktok.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // =============================================
    // ULTRA-FAST REPOST REMOVER (Direct Click)
    // =============================================
    window.stopFast = false;
    let deleted = 0;
    const DELAY = 400; // Adjust the speed here (in milliseconds)

    function fastDelete() {
        if (window.stopFast) {
            console.log(`⏹️ Stopped. Deleted: ${deleted}`);
            return;
        }

        try {
            // 1. Find the repost button and click it directly
            let repostBtn = document.querySelector('button[data-e2e="video-share-repost"]');
            if (!repostBtn) {
                repostBtn = document.querySelector('[data-e2e="video-share-repost"]');
            }
            if (!repostBtn) {
                repostBtn = document.querySelector('svg[data-e2e="repost-icon"]')?.closest('button');
            }

            if (repostBtn) {
                repostBtn.click();
                deleted++;
                console.log(`✅ Deleted: ${deleted}`);
            } else {
                console.warn("⚠️ Repost button not found, skipping");
            }

            // 2. Move to the next video
            setTimeout(() => {
                const nextBtn = document.querySelector('button[data-e2e="arrow-right"]');
                if (nextBtn) {
                    nextBtn.click();
                    setTimeout(fastDelete, DELAY);
                } else {
                    console.log("🏁 No more videos, reloading to load more");
                    location.reload();
                }
            }, 300);

        } catch (e) {
            console.error("❌ Error:", e);
            setTimeout(fastDelete, 1000);
        }
    }

    // Display start message
    console.log("🚀 Starting fast deletion (direct click)");
    console.log("🛑 To stop, enter: window.stopFast = true");
    fastDelete();
})();
