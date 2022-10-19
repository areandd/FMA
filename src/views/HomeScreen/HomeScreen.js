import React from "react";

function HomeScreen() {
  return (
    <div className="wrapper3">
      <div className="profileContainer">
        <div className="topProfileContainer">
          <div className="photoContainer">
            <img
              className="image banner"
              src="https://media.cntraveler.com/photos/56cf6b7569d8fae9411b181a/master/pass/Adriano_Neves_Portugual_Shortlist_Open_Travel_2016.jpg"
              width={500}
              height={200}
              alt=""
            />
            <img
              className="image profile"
              src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="infoContainer">
            <h2 id="name">William Koonz</h2>
            <h3 id="username">@williamkoonz</h3>
            <p id="bio">
              This is a banner Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nesciunt, impedit?
            </p>
            <div className="followContainer">
              <p className="follow" id="following">
                <span className="followCount">123</span> Following
              </p>
              <p className="follow" id="followers">
                <span className="followCount">94</span> Followers
              </p>
            </div>
            <button id="edit-btn">Edit Profile</button>
          </div>
        </div>
        <div className="postSelector">
          <div id="headerContainer">
            <h1>Posts</h1>
          </div>
        </div>
        <div className="bottomPostContainer">
          <div id="postContainer">
            <img
              id="post-profile-image"
              src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg"
              alt=""
            />
            <div className="post-profile-info">
              <p id="profile-post-name">William Koonz</p>
              <p className="light-post" id="profile-post-username">
                @williamkoonz •&nbsp;
              </p>
              <p className="light-post">Mar 21</p>
            </div>
            <div className="post-headline-info">
              <h3 class="post-headline">
                Bank of America Q3 Earnings - Strong Consumers = Strong Bank
              </h3>
              <p className="post-headline">
                Bank of America <span className="stock-ticker">$BAC</span>{" "}
                released their Q3 earnings report pre-market this morning,
                October 17th. The report surprised (in more ways than one) and
                sent the stock up 5.62% at the most in pre-market and closed
                7.07% after-hours this evening
              </p>
            </div>
            <div className="post-image-container">
              <img
                className="post-image"
                src="https://business.bofa.com/content/dam/boamlimages/images/bofa-og-logo.jpg"
                alt=""
              />
            </div>
          </div>
          <div id="postContainer">
            <img
              id="post-profile-image"
              src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg"
              alt=""
            />
            <div className="post-profile-info">
              <p id="profile-post-name">William Koonz</p>
              <p className="light-post" id="profile-post-username">
                @williamkoonz •&nbsp;
              </p>
              <p className="light-post">Mar 21</p>
            </div>
            <div className="post-headline-info">
              <h3 class="post-headline">
                Bank of America Q3 Earnings - Strong Consumers = Strong Bank
              </h3>
              <p className="post-headline">
                Bank of America <span className="stock-ticker">$BAC</span>{" "}
                released their Q3 earnings report pre-market this morning,
                October 17th. The report surprised (in more ways than one) and
                sent the stock up 5.62% at the most in pre-market and closed
                7.07% after-hours this evening
              </p>
            </div>
            <div className="post-image-container">
              <img
                className="post-image"
                src="https://business.bofa.com/content/dam/boamlimages/images/bofa-og-logo.jpg"
                alt=""
              />
            </div>
          </div>
          <div id="postContainer">
            <img
              id="post-profile-image"
              src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg"
              alt=""
            />
            <div className="post-profile-info">
              <p id="profile-post-name">William Koonz</p>
              <p className="light-post" id="profile-post-username">
                @williamkoonz •&nbsp;
              </p>
              <p className="light-post">Mar 21</p>
            </div>
            <div className="post-headline-info">
              <h3 class="post-headline">
                Bank of America Q3 Earnings - Strong Consumers = Strong Bank
              </h3>
              <p className="post-headline">
                Bank of America <span className="stock-ticker">$BAC</span>{" "}
                released their Q3 earnings report pre-market this morning,
                October 17th. The report surprised (in more ways than one) and
                sent the stock up 5.62% at the most in pre-market and closed
                7.07% after-hours this evening
              </p>
            </div>
            <div className="post-image-container">
              <img
                className="post-image"
                src="https://business.bofa.com/content/dam/boamlimages/images/bofa-og-logo.jpg"
                alt=""
              />
            </div>
          </div>
          <div id="postContainer">
            <img
              id="post-profile-image"
              src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg"
              alt=""
            />
            <div className="post-profile-info">
              <p id="profile-post-name">William Koonz</p>
              <p className="light-post" id="profile-post-username">
                @williamkoonz •&nbsp;
              </p>
              <p className="light-post">Mar 21</p>
            </div>
            <div className="post-headline-info">
              <h3 class="post-headline">
                Bank of America Q3 Earnings - Strong Consumers = Strong Bank
              </h3>
              <p className="post-headline">
                Bank of America <span className="stock-ticker">$BAC</span>{" "}
                released their Q3 earnings report pre-market this morning,
                October 17th. The report surprised (in more ways than one) and
                sent the stock up 5.62% at the most in pre-market and closed
                7.07% after-hours this evening
              </p>
            </div>
            <div className="post-image-container">
              <img
                className="post-image"
                src="https://business.bofa.com/content/dam/boamlimages/images/bofa-og-logo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
