# GTA Mods Website

Static GTA modding guide website.

## Publish via GitHub Pages

1. Create a new GitHub repository.
2. Open a terminal in this folder:

```powershell
cd "c:\Users\vasil\Desktop\gta-mods-website"
git init
git add .
git commit -m "Initial GTA mods website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3. In GitHub, go to `Settings → Pages`.
4. Set source to `main` branch and `root` folder.
5. Save and use the provided GitHub Pages URL.

## Notes

- Keep all links relative.
- `index.html` is the homepage.
- No build step is required.
