import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error("putDb not implemented");

  // create connection to db and version we want to use
  const jateDB = await openDB("jate", 1);

  // create a new transaction and specify the db and privileges
  const tx = jateDB.transaction("jate", "readwrite");

  // open up what object store we want to use
  const store = tx.objectStore("jate");

  // use put method to add content to the store
  const request = store.put({ id: 1, value: content });

  // confirmation
  const result = await request;
  console.log("Data was saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error("getDb not implemented");

  // create connection to db and version we want to use
  const jateDB = await openDB("jate", 1);

  // create a new transaction and specify the db and privileges
  const tx = jateDB.transaction("jate", "readonly");

  // open up what object store we want to use
  const store = tx.objectStore("jate");

  // use get method to get content from the store
  const request = store.getAll();

  // confirmation
  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();
