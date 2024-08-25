#### install nextJS app
1)
create-next-app@14.2.5
Ok to proceed? (y)
√ What is your project named? ... first
√ Would you like to use TypeScript? ... No / Yes       -->   No
√ Would you like to use ESLint? ... No / Yes        -->   Yes
√ Would you like to use Tailwind CSS? ... No / Yes        -->   Yes
√ Would you like to use `src/` directory? ... No / Yes        -->   No
√ Would you like to use App Router? (recommended) ... No / Yes        -->   Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes       -->   No
Creating a new Next.js app in E:\All_programe_new_folder\Next JS-CWH   Singma Web Devlopment\Setup Web\first.


2)
// create Docker file in ankushgupta-porfolio folder  and write command in Docker file



3)
// run this command in vs code terminal  and create images (nextjs-porfolio)
```
docker build -t nextjs-portfolio .
```


3)
// check you created images
```
docker images
```


4)
```
// images will be run on port 3000 inside docker  but not run in our system
docker run -it nextjs-portfolio
```


5)
// start nextjs app from this command and now also run in our system 
```
docker run -p 3000:3000 nextjs-portfolio
```

5)
//
```
docker exec -it  < id of container >  bash
ls
```


6)
// install nodmon 



7)
//
```
Docker build .
```



#### responsive of tailwind css


1) sm  --> 640px   ( min width )  640 se bade px par ye apply ho jayenga
2) md  --> 768px  ( min width )
3) lg  --> 1024px  ( min width )
4) xl -->   1280px  ( min width )
5) 2xl --> 1536px  ( min width )





####  start type writter effect

1)
```
// google link of type writter website
https://www.npmjs.com/package/typewriter-effect
```


2)
```
// hit this command 
npm i typewriter-effect
```


3)
```
// template of typewriter

import Typewriter from 'typewriter-effect';

<Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>
```