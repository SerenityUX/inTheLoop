import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://intheloop.fly.dev');

// fetch a paginated records list
export const resultList = await pb.collection('events').getList(1, 50, {
    filter: 'created >= "2022-01-01 00:00:00" && someFiled1 != someField2',
});

// you can also fetch all records at once via getFullList
export const records = await pb.collection('events').getFullList(200 /* batch size */, {
    sort: '-created',
});

// or fetch only the first record that matches the specified filter
export const record = await pb.collection('events').getFirstListItem('someField="test"', {
    expand: 'relField1,relField2.subRelField',
});