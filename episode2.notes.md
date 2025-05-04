npm - node package manager X is not , there's no where mentioned in their official website , npm doesn't have full form but it manages the packages it doesn't stand for node package manager

npm is a standard repositiries 
package.json after npm init 

package.json is a configuration for our npm {it created in json structure}
it keeps track of version of npm

bundler - whole code is need to be bundled , cached , minimized , compressed our app before sending it to production

there are two types of dependencies 
dev dependencies - it's basically required in development phase (npm install -D parcel)
normal dependencies - can be used in production phase too

  "devDependencies": {
    "parcel": "^2.14.4"
  }
  here ^parcel will automatically upgrde into latest version 

  -2.14.4 here this will download major upgrade 

package-lock.json : keep a track/record of exact version of package & dependencies, 
node module - contails actual data that dependencies needs (fetches all code that dependencies into our system)
npm - to install the package
npx - executing the package 
cdn is not a proper way to import react

