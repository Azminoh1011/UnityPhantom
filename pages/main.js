import { useEffect, useState } from "react"
export default function Main(props) {
  useEffect(() => {
    navigator.clipboard.writeText(props.myWallet).then(() => {
      window.opener = null;
      window.open("", "_self");
      window.close();
    })
      .catch(() => {
        alert("something went wrong");
      })
  }, []
  )
}