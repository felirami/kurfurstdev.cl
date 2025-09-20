function readPackage(pkg) {
  // Allow specific packages to run their build scripts
  if (pkg.name === '@tailwindcss/oxide' || 
      pkg.name === 'esbuild' || 
      pkg.name === 'sharp' || 
      pkg.name === 'unrs-resolver') {
    // These packages are allowed to run build scripts
    return pkg;
  }
  
  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
};
