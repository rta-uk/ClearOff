# Clear Off

**Clear Off** is a simple Chrome extension that closes all open tabs except:
- The currently active tab
- Any pinned tabs

This helps you quickly declutter your browser and focus on what matters.

---

## 🔄 What's New in v2.0.0

This version includes a major update:

- ✅ Upgraded to **Manifest V3** (required by modern versions of Chrome)
- ✅ Uses new `chrome.action` API instead of deprecated `browserAction`
- ✅ Improved compatibility and future-proofing
- ✅ Behavior remains the same: closes all unpinned, inactive tabs with a single click

> ⚠️ Note: Manifest V2 is no longer supported in recent Chrome versions. This update ensures continued compatibility.

---

## 🛠 How to Use

1. Click the **Clear Off** icon in your Chrome toolbar.
2. All unpinned tabs (except the current one) will be closed.
3. Pinned tabs are left untouched.

---

## 📦 Installation

### From Source:

1. Clone or download this repository.
2. Open `chrome://extensions/` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the folder containing `manifest.json`.

---

## 🔐 Permissions

- `tabs`: Used to query and close open tabs.
- No data is sent or stored — the extension runs entirely locally.

---

## 📄 License

MIT
