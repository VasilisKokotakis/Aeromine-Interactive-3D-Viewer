Instructions:

1st Step: I have to create index.html
2nd Step: I have to create main.js
3rd Step: I have to initiallize json package

    from project directory:
        1. npm init -y
        2. npm install vite --save-dev
        3. npm install three

In json that will appear add:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}


4th Step: When im ready to build i have to run
    - npm run dev

5th Step: Open the link from terminal and see the results

*The models that are going to be loaded, should be in a folder with name public.*
Correct path: 
  - "C:\Users\Working Station\Documents\Aeromine\public\Models\Porsche\scene.gltf"


============================================================================================

Production steps:

1st step: npm run build

2nd step:

  - git init
  - git add .
  - git commit -m "Initial commit"

3rd step:

  - git remote add origin https://github.com/yourusername/your-repo-name.git
  - git branch -M main
  - git push -u origin main


4th step: 

  - https://vercel.com/vasilis-projects-eeb3f847
  - Build Command: npx vite build
  - Output Directory: dist

  Locally: npm install vite --save-dev

5th step:

 Create vercel.json

 {
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}

and update package.json with:

"engines": {
  "node": ">=18.x"
}

6th step:

git add .
git commit -m "Fix Vercel deploy issues"
git push

7th step:

Deploy from https://vercel.com/vasilis-projects-eeb3f847



# Aeromine-Interactive-3D-Viewer
