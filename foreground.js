console.log(
  parseInt(
    $(".text-value")[0].innerHTML.replace("<!---->", "").split(":")[0] * 60
  ) +
    parseInt($(".text-value")[0].innerHTML.replace("<!---->", "").split(":")[1])
);
setInterval(() => {
  console.log("1111111111");
  chrome.runtime.sendMessage(
    parseInt(
      $(".text-value")[0].innerHTML.replace("<!---->", "").split(":")[0] * 60
    ) +
      parseInt(
        $(".text-value")[0].innerHTML.replace("<!---->", "").split(":")[1]
      )
  );
}, 1000);
