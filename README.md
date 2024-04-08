# React Class

# Parcle
- Dev Build
- Local Server
- HMR = Hot module Replacement 
- File Watching Algorithum - Written By C++ 
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting 
- Differently Bundling - Support Older Browsers 
- Diagnostic 
- Error Handling 
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod Bundles


# Food Ordering App 
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RastaurentContainer
 *   - RestaurentCard
 *     -  img, res name, rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Contact
 **/


 Two type of Export/ Import     

Default export/import :-

export default component;
import component from "file path>";
Named export/import :-

export const component;
import {component} "file path";


# React Hooks
(Normal js Utility Functions)
- useState() - Superpowerful state variables in react
- useEffect

# 2 types Routing in web apps
- client side Routing
- server side Routing


# Redux Toolkit
- install @reduxjs/toolkit and react-redux
- Build Our Store
- Connect Our store to our App
- Slice (cart slice)
- Dispatch(action)
- Selector(read the data)


# Type of testing(developer)
- Unit Testing
- Integration Testing
- End to End Testing


# Setting up testing in our app
- Install React testing library
- installed jest
- installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default Babel transpilation
- jest Configuration (npx jest --init)
- install jsdom library
- install @babel/preset-react(to make jsx work in test cases)
- include @babel/preset-react inside my babel Config
- install testing-library/jest-dom 