//Importing API from Cosmic website
import Cosmic from "cosmicjs";

const bucket = Cosmic().bucket({
  slug: process.env.REACT_APP_BUCKET_SLUG ,
  read_key: process.env.REACT_APP_READ_KEY ,
});
export default bucket;
