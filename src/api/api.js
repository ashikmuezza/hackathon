export const SaveData = (FileName,FileType,FileSize,FileDate,IpfsHash) =>
  `https://chainlink-hackathon-api.herokuapp.com/Save?FileName=${FileName}&FileType=${FileType}&FileSize=${FileSize}&FileDate=${FileDate}&IpfsHash=${IpfsHash}`;

export const GetData = () =>
  `https://chainlink-hackathon-api.herokuapp.com/Details`

