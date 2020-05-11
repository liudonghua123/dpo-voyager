---------------------------------------------------
-- Smithsonian Digitization Program Office (DPO) --
-- 3D Digitization Program                       --
--                                               --
-- Voyager Web Explorer and Authoring Tool Suite --
-- Demo and Test Assets                          --
---------------------------------------------------

The 3D digitized objects in this package are provided for the sole purpose of
demonstrating and testing the capabilities of the Voyager 3D Web Tool Suite.

Before you start, take a moment to read the enclosed Terms Of Use and Disclaimer.

Package content:

- Ivory Tusk - National Museum of African Art (NMAfA 68-23-53)
- Vase - Freer | Sackler (FSG F1986.19a-b)
- Chair - Cooper Hewitt (CHDM 1938-58-1083)
- Ritual Ewer - Freer | Sacker (FSG F1961.33a-b)

Quick start:

1. Clone the Voyager repository to your project folder:
   > git clone --recurse-submodules https://github.com/Smithsonian/dpo-Voyager

2. Install all dependencies:
   > npm install

3. Build Voyager (development build):
   > npm run build-dev

4. Build the development server:
  > npm run build-server

5. Start the development and test server:
   > npm run server

6. Create a subfolder in the Voyager project folder named "files"

7. Copy the content of this package into the created subfolder "files"

8. Open your browser (Chrome preferred).

9. Use the following links to display the demo assets. Note that the
   "localhost" host name assumes the server is running on the same machine.

   Voyager Exlorer (the viewer)
   http://localhost:8000/voyager-explorer-dev.html?root=models/tusk/&document=tusk.svx.json
   http://localhost:8000/voyager-explorer-dev.html?root=models/vase/&document=vase.svx.json
   http://localhost:8000/voyager-explorer-dev.html?root=models/chair/&document=chair.svx.json
   http://localhost:8000/voyager-explorer-dev.html?root=models/ewer/&document=ewer.svx.json

   Voyager Story (the authoring tool), quality inspection mode
   http://localhost:8000/voyager-story-dev.html?mode=qc&root=models/tusk/&document=tusk.svx.json
   http://localhost:8000/voyager-story-dev.html?mode=qc&root=models/vase/&document=vase.svx.json
   http://localhost:8000/voyager-story-dev.html?mode=qc&root=models/chair/&document=chair.svx.json
   http://localhost:8000/voyager-story-dev.html?mode=qc&root=models/ewer/&document=ewer.svx.json

   Voyager Story (the authoring tool), authoring mode
   http://localhost:8000/voyager-story-dev.html?mode=author&root=models/tusk/&document=tusk.svx.json
   http://localhost:8000/voyager-story-dev.html?mode=author&root=models/vase/&document=vase.svx.json
   http://localhost:8000/voyager-story-dev.html?mode=author&root=models/chair/&document=chair.svx.json
   http://localhost:8000/voyager-story-dev.html?mode=author&root=models/ewer/&document=ewer.svx.json



  _________       .__  __  .__                        .__                ________ ________   
 /   _____/ _____ |__|/  |_|  |__   __________   ____ |__|____    ____   \_____  \\______ \  
 \_____  \ /     \|  \   __\  |  \ /  ___/  _ \ /    \|  \__  \  /    \    _(__  < |    |  \ 
 /        \  Y Y  \  ||  | |   Y  \\___ (  <_> )   |  \  |/ __ \|   |  \  /       \|    `   \
/_______  /__|_|  /__||__| |___|  /____  >____/|___|  /__(____  /___|  / /______  /_______  /
        \/      \/              \/     \/           \/        \/     \/         \/        \/ 
