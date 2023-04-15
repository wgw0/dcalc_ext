import fs from 'fs';

// async function loadModules() {
//     try {
//       const modulesData = await fs.promises.readFile('D:/DRepos/dcalc_ext/client/modules.json', { encoding: 'utf-8' });
//       const modules = JSON.parse(modulesData);
  
//       const modulesFinalYear = modules.filter(module => module.year === "final_year");
//       const modulesSecondYear = modules.filter(module => module.year === "second_year");
  
//       console.log(modulesFinalYear, modulesSecondYear);
        
//     } catch (e) {
//       console.error('Failed to load list of modules, using defaults', e);
//     }
//   }
  
//   loadModules();
  
  async function getModuleNames() {
    try {
      const modulesData = await fs.promises.readFile('D:/DRepos/dcalc_ext/client/modules.json', { encoding: 'utf-8' });
      const modules = JSON.parse(modulesData);
      const moduleNames = modules.map(module => module.module_name);
      return moduleNames;
    } catch (e) {
      console.error('Failed to load list of modules', e);
      return [];
    }
  }
  
getModuleNames().then(moduleNames => console.log(moduleNames));