# ✦ A Beginner's Guide to After Effects
## Table Of Contents
- [Specifications (Purchasing your first PC)](#spp)
- [Which version of After Effects should I install?](#ver)
- [What are plugins, and which should I install?](#pii)
    - [Plugin Recommendations](#prc)
- [Composition Settings](#cos)
- [How to save and import presets](#sip)
    - [MBLook + RGX presets](#mbl)
- [After Effects Shortcuts](#aes)

---
### Specifications (Purchasing your first PC) <span id="spp"></span>
If you're building or buying a PC for After Effects (or other Adobe apps) and aren't sure where to start, this guide breaks hardware down into three simple tiers.

These aren't strict requirements, they're simply good starting points. Depending on your budget and what you edit, you may choose to spend more on certain components, so best to do further personalized research.
<br><br>
#### Key Notes:
- After Effects benefits most from a **fast CPU** and **plenty of RAM**. The GPU becomes more important when using GPU-accelerated effects, third-party plugins, or working alongside **Premiere Pro**.
- Higher clock speeds generally matter more than having an extremely high core count.
- If you're on a budget, prioritize **more RAM** over DDR5. DDR5 is faster, but additional capacity usually has a larger impact on performance.
- Storage fills up quickly when working with videos. If possible, use an **SSD** and consider adding a second drive for projects and cache files.
- A PC is a major purchase. It's always worth getting a second opinion before spending your money.
<br><br>

#### Low-End / Budget-Friendly
Perfect for beginners or casual editors working with smaller projects.
<br><br>
**RAM**: 16GB *(32GB is highly recommended if your budget allows)*

**Storage**: 500GB–1TB *(NVMe preferred)* SSD

**CPU**:
- Intel Core i5 *(12th Gen or newer)*
- AMD Ryzen 5 5600X, 7600, or newer

**GPU**:
- RTX 3050 / RTX 4060
- RX 6600 / RX 7600
<span class="note">Don’t overspend on the GPU unless you also use your PC for gaming or other GPU-heavy tasks. Any extra budget is usually better spent on RAM or storage.</span>
<br>

#### Mid-Range / Casual
Ideal for most editors working with larger compositions, plugins, and moderate 4K footage.
<br><br>
**RAM**: 32GB

**Storage**: 1TB *(NVMe preferred)* SSD

**CPU**:
- Intel Core i7 *(13th Gen or newer / Core Ultra equivalent)*
- AMD Ryzen 7 7700X or newer

**GPU**:
- RTX 4060 / 4070
- RX 7700 XT
<span class="note">For most users, upgrading from 32GB to 64GB of RAM will provide a more noticeable improvement than upgrading to a faster GPU.</span>
<br>

#### High-End / Pro
Designed for professional workflows, large projects, heavy plugin usage, 4K editing, and 3D work.

**RAM**: 64GB - 128GB+

**Storage**: 2TB+ *(NVMe preferred)* SSD

**CPU**:
- Intel Core Ultra 7/9
- AMD Ryzen 9 7900X / 7950X / newer

**GPU**:
- RTX 4080 / 4090 / 5080 / 5090
- RX 7900 XTX
<span class="note">More than 64GB of RAM or 16GB of VRAM is only worthwhile for extremely demanding workflows, such as large 4K/8K projects or complex 3D scenes.</span>

---
### Which version of After Effects should I install? <span id="ver"></span>
In most cases, we recommend installing the latest version of After Effects to take advantage of the newest features, performance improvements, and bug fixes.

If you're using an older or lower-end computer, an earlier version may run more smoothly. There's nothing wrong with trying multiple versions before deciding which works best for your system.
<span class="note">We recommend for you to check out [what's new](https://helpx.adobe.com/after-effects/using/whats-new.html) as well as the [system requirements](https://helpx.adobe.com/after-effects/system-requirements.html) for each version.</span>

#### Keep in mind
After Effects projects **are not backwards compatible**.

A project created in a newer version cannot be opened in an older version unless it has been saved as a backwards-compatible copy. If you have access to the newer version, you can go to:

**File** > **Save As** > **Save a Copy As Previous Version**

to create a version compatible with older releases *(within Adobe's supported range)*.
<span class="note">On MacOS? Read [this](ros.md) to learn about Apple Silicon compatibility. Mac users have different factors to consider compared to Windows users.</span>
<br>
### What are plugins, and which should I install? <span id="pii"></span>
Plugins are additional effects or tools that aren't included with After Effects by default. They expand what you can create, from advanced motion graphics to realistic lighting, particles, color grading, and visual effects.

Not every editor needs every plugin. Installing dozens of plugins you never use only wastes storage and can slightly increase startup times, so install what you'll actually use.

#### Plugin Recommendations <span id="prc"></span>
**ReelSmart Motion Blur**: Adds realistic motion blur to footage or animations.

**Magic Bullet Looks**: Advanced color grading with hundreds of customizable presets.

**Twitch**: Creates quick camera shakes, flickers, and jerky movement.

**Twixtor**: Creates smooth slow motion through frame interpolation.

**Universe**: A collection of effects, best known for VHS, retro, and glitch effects.

**Sapphire**: One of the most popular plugin suites, featuring hundreds of glows, blurs, distortions, transitions, and stylized effects.

**Continuum (BCC)**: Another massive collection of visual effects, transitions, restorations, and generators.

**Trapcode**: Industry-standard particle systems, 3D objects, and procedural animations.

**Element 3D**: Real-time 3D models, text, and objects inside After Effects.

**Saber**: Creates glowing energy effects inspired by lightsabers, neon, lasers, and outlines.

**Deep Glow**: A higher quality glow effect than the default Glow effect, commonly used on text and graphics.

**Optical Flares**: Highly customizable lens flare effects.

Some great plugins for glitch editing include: **Signal**, **Pixel Sorter**, **Omino**, **Glitchify**, and **Datamosh**.

Most plugin developers have showcase videos on YouTube or their websites, making it easy to see what each plugin can do before installing it.

<span class="note">Our website currently offers 100+ plugins.</span>

<br>

### Composition Settings <span id="cos"></span>
How to properly set up your first project file.
#### [Resolution VS Ratio](https://ibb.co/Z1fG7Qw7)
Resolution refers to the number of pixels that exist inside an image. The first number represents the amount of pixels horizontally while the second number represents vertical. On the other hand, an aspect ratio refers to the proportional relationship between an image's width and height.

For most editors, 1080p is still more than enough, especially for content uploaded to social media. Many platforms compress uploaded videos, meaning exporting in 4K won't always produce noticeably better quality.

If your workflow genuinely benefits from 4K, such as client work or heavy cropping, then it's absolutely worth using.
#### FPS Settings
FPS *(Frames Per Second)* determines how many images are shown every second.
- `23.976 FPS`: Most films, TV shows, and anime are produced at this frame rate.
- `30 FPS`: The most common frame rate for general editing, motion graphics, and social media.
- `60 FPS`: Ideal for gaming edits, sports, and footage that may be slowed down.
- `15 FPS`: Used intentionally for stylized or choppy animation.
<br><br>

#### Want to edit in a fps lower than 30fps?

Instead of lowering your composition's frame rate, consider using **Posterize Time**.

This lets you reduce the frame rate of individual layers, animate the effect with keyframes, and avoids affecting the entire composition.
<br><br>

#### Start & Duration
Most users should leave the Start Time at 0:00.

Set your composition's Duration to match the length of your project.

For example, a 30-second edit would use `0:00:30:00`. 

If your composition is shorter than imported footage, anything beyond the composition length won't be visible until you increase the duration.
You can change these settings at any time by going to:

**Composition** > **Composition Settings**
<br><br>

#### Other Settings
For a stronger motion blur, you can go into the **Advanced** tab and increase your shutter angle and samples per frame. Intense motion blur is not recommended while also using blur based plugins.

Your background color represents the color that will be visible when no other media is on the timeline. If you plan to do fades or flashes, you’ll normally want to set this color to black.

Make sure to name your comps something recognizable, otherwise you may end up overwhelmed. Give each of your edits a name unique to them!

<br>

### How to save and import presets <span id="sip"></span>
Presets allow users to save any adjustments they’ve made into a tiny file. Presets can help you save time by allowing you to easily recreate transitions or effects in just one click, all you have to do is import and apply. Editors will often share presets with one another, whether this be between friends, through free online resources, or purchased content.
#### FFX presets
FFX presets, unique to After Effects, are the most common type of preset you’ll find yourself working with.

To save a preset, highlight what you’d like to be saved, such as any keyframes or effect controls by clicking and dragging your cursor over them or holding shift. Next, click **Animation** at the top and select **Save Animation Preset**. Name your preset whatever you’d like to remember it by. Presets should be saved in:

Windows: `\Documents\Adobe\After Effects 2024\User Presets`

Mac: `~/Documents/Adobe/After Effects 2024/User Presets`

For better organization, users can create sub-folders in User Presets.
For example, one folder for colorings and another for shakes. You can organize and name your folders however you’d like, and as long as they’re located under **User Presets**, they will be visible. You’ll be able to drop down these folders, ultimately resulting in a clean list inside **After Effects**.

<div class="note">
  <p><strong>Incorrect</strong> guides online may use:</p>

  <p>Windows: <code>C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\Presets</code></p>

  <p>Mac: <code>/Applications/Adobe After Effects 2024/Presets</code></p>

  <p>While this location may function, it is not recommended as it is reserved for default presets. If used, your personal presets will appear next to <strong>Default</strong>, rather than their own category, which is not ideal.</p>
</div>

<br>

### MBLook + RGX presets <span id="mbl"></span>

MBLook and RGX presets are unique to **Magic Bullet Looks**, a plugin used to create colorings. While some editors may choose to save all their MBL settings as .ffx, others may prefer .mblook or .rgx, as you can easily preview them inside the **Looks Builder**.

To save a custom preset inside Looks on any version, simply click the downwards arrow on the bottom left of your screen after you’ve finished your coloring.

How you import presets depends on your **Magic Bullet Looks** version, as **Red Giant** switched their extension from **MBLook** to **RGX** in version 14 and higher.

#### Version 13-
To import .mblook files on MBL 13 or before, simply paste them (as a folder) in the following location:

Windows: `C:\Program Files (x86)\LooksBuilder\Looks`

MacOS: `/Library/Application Support/LooksBuilder/Looks/`

Older versions of **MBL** (13-) do not support .rgx files, Users will not be able to use these types of presets unless they upgrade, which is recommended as Magic Bullet 14 is 5 years old.

#### Version 14+
To import .rgx files on MBL 14 or newer, simply paste them (as a folder) in the following location:

`Documents\Red Giant\Magic Bullet Looks\Presets`

To import .mblook files, you’ll have to directly import them inside of **Looks Builder**, which will automatically convert them to .rgx for you. To do this, select the folder you want them to save to, click the arrow symbol on the top left, then select the files you wish to import.

The latest version of Magic Bullet can be found on our website.

<br>

### After Effects Shortcuts <span id="aes"></span>
<span class="note">The Mac equivalent of Ctrl is Cmd.</span>
Spacebar = play/pause your preview
0 Numpad = RAM preview

I = go to first frame of the selected layer

O = go to last frame of the selected layer
<br><br>
B = set the beginning of your workspace

N = set the end of your workspace

<span class="note">(Your workspace is the area that plays when previewing)</span>

Ctrl + Shift + D = split your layer

Alt/option + [ = trims your layer (beginning)

Alt/option + ] = trims your layer (end)
<br><br>
Ctrl + A = Selects all layers in your composition

Ctrl + shift + C = precompose
<br><br>
Ctrl + Z = undo your last action

Ctrl+ Shift + D = Redo last action undone
<br><br>
V = Select

H = Hand

S = Scale

T = Opacity

R = Rotation

P = Position

G = Pen Tool

Y / A = Anchor Point
<br><br>
U = View all Keyframe(s)

L = Audio Level(s)

M = View Mask(s)

L 2x = View Waveform(s)
<br><br>
Alt + Shift + S = Creates Scale Keyframe

Alt + Shift + T = Creates Opacity Keyframe

Alt + Shift + R = Creates Rotation Keyframe

Alt + Shift + P = Creates Position Keyframe
<br>
Ctrl + C = Copy

Ctrl + V = Paste
<span class="note">(You can copy and paste keyframes, effect settings, layers and more.)</span>

Ctrl + S = Save

Ctrl + I = Import

Ctrl + O = Open

Ctrl + Y = New Solid

Ctrl + D = Duplicate Layer

Ctrl + T = New Text Layer

Ctrl + Alt + T = Enable Time Remap

Ctrl  + K = Composition Settings

F9 / FN + F9 = Easy Ease Keyframes

F3 / FN + F3 = View Effects Panel

F4 / FN + F4 = Show/Hide Layer Switches & Modes columns

Ctrl + Alt + M = Adobe Media Encoder

Ctrl + Alt + N = New Project

Ctrl + Alt + Y = New Adjustment Layer

Ctrl + Alt + Shift + Y = New Null Layer

Ctrl + Alt + Home = Center Anchor Point
<br>
Ctrl + Down Arrow = Select Next Layer in Stacking Order

Ctrl + Up Arrow = Select Previous Layer in Stacking Order