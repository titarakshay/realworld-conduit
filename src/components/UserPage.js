import React, { useEffect, useState } from "react";

function UserPage(props) {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const url = "https://mighty-oasis-08080.herokuapp.com/api/user";
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Token ${localStorage.authToken}`,
      },
    })
      .then((res) => res.json())
      .then(({ user }) => setUserInfo(user))
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);
  console.log(userInfo, "here we get");
  return (
    <div>
      <h1>Username :{userInfo?.username}</h1>
      <h2>Email:{userInfo?.email}</h2>
    </div>
  );
}
export default UserPage;
