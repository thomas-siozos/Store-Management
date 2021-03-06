# StoreManagement

This is a store management app that provides main functions you'd expect from a store management app,
such as CRUD tables, CRD products on menu and products management on each table.

![View_Tables](https://github.com/SiozosThomas/Store-Management/blob/master/examples/table-list.png)

## Table of Contents

* [Features](#Features)
* [Setup](#Setup)
* [Develop](#Develop)
* [Build](#Build)
* [Dockerize](#Dockerize)
* [Examples](#Examples)
* [Author](#Author)
* [License](#License)

## Features
:scroll: <br/>

* Create Table.
* View Tables.
* Update Table.
* Delete Table.
* Add Product.
* View Products.
* Delete Product.
* Add Product to Table.
* Delete Product from Table.
* Login/Logout.
* Sum of selected products on each table.

## Setup
![Custom badge](https://img.shields.io/endpoint?color=%23CB3837&logo=NPM&style=plastic&url=https%3A%2F%2Ff54vff4z3g0b.runkit.sh%2F)

- Clone this repo to your desktop
- npm install
- Change on backend/app.js the connection of mongoose.
  - First Step, you'll need an account on MongoDB Atlas.
  - Second Step, create a new Cluster (Free).
  - Third Step, allow Network Access to your IP or 0.0.0.0/0 (anyone).
  - Fourth Step, connect your app with your database.
  - You are ready!

## Develop
:computer:<br/>

- Run `ng serve` for Angular, running at localhost:4200
- Run `npm run start:server` for API, running at localhost:3000
- Open your browser at localhost:4200

## Build
:wrench:<br/>

Run `ng build` to build the project. The build artifacts will be stored in the `app-production/` directory. Use the `--prod` flag for a production build.

## Dockerize
:whale:<br/>

You need **backend/Dockerfile** , **./Dockerfile** and **docker-compose.yaml** files.<br/>
Also, if you use Hyper-V engine, you have to put your directory on "File Sharing".<br/>

### Run docker-compose

Run the command **docker-compose up -d** (for detach mode, remove -d if you don't want detach mode) in the directory with the docker-compose file.<br/>
If you want to close it, you can from your docker-desktop/dashboard or with the command **docker-compose down**.<br/>

**!NOTE**<br/>
You have to change your mongodb domain (backend/app.js) to:
```
 mongodb://host.docker.internal:27017/dbname
```
If you use local mongodb.(Container understands that that means localhost).

## Examples

### Login

![Login](https://github.com/SiozosThomas/Store-Management/blob/master/examples/login.png)

### Add Table

![Add_Table](https://github.com/SiozosThomas/Store-Management/blob/master/examples/add_table.png)

### Products

![Products](https://github.com/SiozosThomas/Store-Management/blob/master/examples/products.png)

### Add Product on Table

![Add_Product](https://github.com/SiozosThomas/Store-Management/blob/master/examples/add_product.png)

### Update Table

![Update_Table](https://github.com/SiozosThomas/Store-Management/blob/master/examples/update_table.png)

### View Tables

![View_Tables](https://github.com/SiozosThomas/Store-Management/blob/master/examples/table-list.png)

### Selected Sum

![Selected_Sum](https://github.com/SiozosThomas/Store-Management/blob/master/examples/selected.png)

## Author
:pencil2:<br/>

**Siozos Thomas**

## License
:key:<br/>

You can check out the full lecense [here](https://github.com/SiozosThomas/Store-Management/blob/master/LICENSE)
This project is lecensed under the terms of the **MIT** license.
