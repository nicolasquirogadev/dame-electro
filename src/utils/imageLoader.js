const imageModules = import.meta.glob('../assets/macroled/*.jpeg', { eager: true });

const images = {};
for (const path in imageModules) {
  const imageName = path.replace('../assets/macroled/', '').replace('.jpeg', '');
  images[imageName] = imageModules[path].default;
}

export default images;