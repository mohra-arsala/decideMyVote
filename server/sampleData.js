﻿const shortLoremIpsum = `Lorem id sint aliqua tempor tempor sit. Ad dolor dolor ut nulla mollit dolore non eiusmod Lorem tempor nisi cillum.`;
const sampleData = {};
const longLoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
  non enim praesent elementum facilisis leo vel. Risus at ultrices mi
  tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
  tellus. Convallis convallis tellus id interdum velit laoreet id donec
  ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
  suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
  quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
  proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
  tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
  varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
  Lorem donec massa sapien faucibus et molestie ac.`;

// This class holds sample data used by some generated pages to show how they can be used.
// TODO Web Template Studio: Delete this file once your app is using real data.
sampleData.textAssets = [
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Bernie Sanders",
    status: "Democrat",
    shipTo: "Francisco Pérez-Olaeta",
    orderTotal: 2490.0,
    orderDate: new Date(2017, 5, 24).toDateString(),
    id: 1,
    imageSrc:'https://pbs.twimg.com/profile_images/1097820307388334080/9ddg5F6v_400x400.png'
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company B",
    status: "Closed",
    shipTo: "Soo Jung Lee",
    orderTotal: 1760.0,
    orderDate: new Date(2017, 5, 24).toDateString(),
    id: 2
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company C",
    status: "Shipped",
    shipTo: "Run Liu",
    orderTotal: 665.0,
    orderDate: new Date(2017, 6, 3).toDateString(),
    id: 3,
    imageSrc:'https://wtsrepository.blob.core.windows.net/sampledata/CompanyC.svg'
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company D",
    status: "Shipped",
    shipTo: "Soo Jung Lee",
    orderTotal: 560.0,
    orderDate: new Date(2017, 6, 5).toDateString(),
    id: 4,
    imageSrc:'https://wtsrepository.blob.core.windows.net/sampledata/CompanyD.svg'
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company E",
    status: "New",
    shipTo: "John Rodman",
    orderTotal: 810.0,
    orderDate: new Date(2017, 6, 7).toDateString(),
    id: 5,
    imageSrc:'https://wtsrepository.blob.core.windows.net/sampledata/CompanyE.svg'
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company F",
    status: "New",
    shipTo: "Elizabeth Andersen",
    orderTotal: 196.5,
    orderDate: new Date(2017, 6, 7).toDateString(),
    id: 6,
    imageSrc:'https://wtsrepository.blob.core.windows.net/sampledata/CompanyF.svg'
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company G",
    status: "Closed",
    shipTo: "Peter Krschne",
    orderTotal: 270.0,
    orderDate: new Date(2017, 6, 11).toDateString(),
    id: 7,
    imageSrc:'https://wtsrepository.blob.core.windows.net/sampledata/CompanyG.svg'
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company H",
    status: "Closed",
    shipTo: "Sven Mortensen",
    orderTotal: 736.0,
    orderDate: new Date(2017, 6, 14).toDateString(),
    id: 8,
    imageSrc:'https://wtsrepository.blob.core.windows.net/sampledata/CompanyH.svg'
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company I",
    status: "Shipped",
    shipTo: "Anna Bedecs",
    orderTotal: 800.0,
    orderDate: new Date(2017, 6, 18).toDateString(),
    id: 9,
    imageSrc:'https://wtsrepository.blob.core.windows.net/sampledata/CompanyI.svg'
  }
];

// TODO Web Template Studio: If you use a database replace this ID with the ID created by the database
sampleData.listID = 3;

sampleData.listTextAssets = [
  {
    text: shortLoremIpsum,
    _id: 1
  },
  {
    text: shortLoremIpsum,
    _id: 2
  }
];


module.exports = sampleData;
