# ✦ Changing After Effects Versions
This is a quick, comprehensive guide on how to switch **After Effects** versions. This guide includes how to transfer your presets, plugins and scripts.
<span class="note">Note that if you are simply updating to the same year, just a newer build (e.g 2025.1 → 2025.2), it will automatically transfer everything by itself.</span>
This guide only applies if you are changing years *(example: 2024 → 2025)*.
<span class="note">You can safely run multiple versions of **After Effects**. Simply install the new version first, confirm your data is migrated, and then uninstall the previous version whenever you’re ready.</span>

---
## ✧ Plugins <span id="plugins"></span>
#### Common
If a plugin is located under your Common folder, it will automatically show up under all installed **After Effects** versions and in this case you don’t have to worry about reinstalling or transferring them. Plugins such as Red Giant and Sapphire install to common. You do not have to worry about plugins installed in the following folders.

<span class="note">Windows: `C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore`</span>

<span class="note">MacOS: `Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore`</span>
#### Local
Plugins that are located in this location will only be visible to that specific **After Effects** version, which in this case you’ll have to copy and paste the files over into your new folder.

<span class="note">Windows: `C:\Program Files\Adobe\Adobe After Effects [year]\Support Files\Plug-ins`</span>

<span class="note">MacOS: `/Applications/Adobe After Effects [YR]/Plug-ins`/</span>

1. Navigate to the folder mentioned above.
- Copy everything **except** the following default folders:
    - (AdobePSL)
    - Cineware by Maxon
    - Effects
    - Extensions
    - Format
    - Keyframe
<span class="note">Check inside the **Effects** sub-folder as a small amount of plugins install here.</span>
2. Paste the files you've copied somewhere easy for you to find such as on your desktop. Creating a folder may be easier for some individuals.

3. Move said files to your new **After Effects** plugin folder and you're done.

---
## ✧ Presets <span id="presets"></span>
For presets, simply copy and paste them into your new folder using the same idea.
<span class="note">Windows: `\Documents\Adobe\After Effects [year]\User Presets`</span>

<span class="note">MacOS: `~/Documents/Adobe/After Effects [year]/User Presets`/</span>
1. Navigate to the folder mentioned above, [year] as in your old version and copy all items.

2. Paste the files you've copied somewhere easy for you to find such as on your desktop. Creating a folder may be easier for some individuals.

3. Move said files to your new **After Effects** preset folder and you're done.

---
## ✧ Other <span id="other"></span>
#### Extensions
Extensions are installed to a location visible to all **After Effects** versions installed, you will not have to transfer these.
<span class="note">Refer to [this](paths.md)</span>

#### Scripts

Scripts will need to be moved to your new **After Effects** script folder, using the same concept as above.
<span class="note">Windows: `C:\Program Files\Adobe\Adobe After Effects [year]\Support Files\Scripts\ScriptUI Panels`</span>

<span class="note">MacOS: `/Applications/Adobe After Effects [year]/Scripts/ScriptUI Panels`</span>