function getAvatarByTier(tier) {
  switch (tier) {
    case 1:
      return "images/tier1.png";
    case 2:
      return "images/tier2.png";
    case 3:
      return "images/tier3.png";
    case 4:
      return "images/tier4.png";
    case 5:
      return "images/tier5.png";
    case 6:
      return "images/tier6.png";
    case 7:
      return "images/tier7.png";
    default:
      return "images/tier0.png";
  }
}

function buildMessage(event) {
  const tier = event.tier;
  const avatar = event.avatar === "" ? getAvatarByTier(tier) : event.avatar;
  const name = event.name;
  const displayAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: event.currency,
  }).format(event.amount);
  const message = event.message;

  return `<yt-live-chat-paid-message-renderer
  class="style-scope yt-live-chat-item-list-renderer tier${tier}"
  allow-animations=""
>
  <div id="card" class="style-scope yt-live-chat-paid-message-renderer">
    <div id="header" class="style-scope yt-live-chat-paid-message-renderer">
      <yt-img-shadow
        id="author-photo"
        height="40"
        width="40"
        class="style-scope yt-live-chat-paid-message-renderer no-transition"
        loaded=""
        style="background-color: transparent"
      >
        <img
          id="img"
          class="style-scope yt-img-shadow"
          alt=""
          height="40"
          width="40"
          src="${avatar}"
        />
      </yt-img-shadow>
      <div
        id="header-content"
        class="style-scope yt-live-chat-paid-message-renderer"
      >
        <div
          id="header-content-primary-column"
          class="style-scope yt-live-chat-paid-message-renderer"
        >
          <div
            id="author-name"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            ${name}
          </div>
          <div
            id="purchase-amount-column"
            class="style-scope yt-live-chat-paid-message-renderer"
          >
            <div
              id="purchase-amount"
              class="style-scope yt-live-chat-paid-message-renderer"
            >
              ${displayAmount}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="content"
      class="style-scope yt-live-chat-paid-message-renderer"
    >
      <div
        id="message"
        dir="auto"
        class="style-scope yt-live-chat-paid-message-renderer"
      >
        ${message}
      </div>
    </div>
  </div>
</yt-live-chat-paid-message-renderer>`;
}
