const shortLoremIpsum = `Lorem id sint aliqua tempor tempor sit. Ad dolor dolor ut nulla mollit dolore non eiusmod Lorem tempor nisi cillum.`;
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
    shortDescription: "summary",
    longDescription: longLoremIpsum,
    title: "Bernie Sanders",
    party: "Democrat",
    runningFor: "President",
    endersements: "Alexandria Ocasio-Cortez",
    zips: [92617, 90089, 95758],
    id: 1,
    imageSrc:'https://pbs.twimg.com/profile_images/1097820307388334080/9ddg5F6v_400x400.png'
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Katie Porter",
    party: "Democrat",
    zips: [92617],
    runningFor: "D-CA 45th District",
    id: 2,
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Katie_Porter%2C_official_portrait%2C_116th_Congress.jpg',
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company C",
    id: 3,
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company D",
    id: 4,
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company E",
    id: 5,
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company F",
    id: 6,
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company G",
    id: 7,
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company H",
    id: 8,
  },
  {
    shortDescription: shortLoremIpsum,
    longDescription: longLoremIpsum,
    title: "Company I",
    id: 9,
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
