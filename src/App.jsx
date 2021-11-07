import React from "react";

function Avatar() {
    return (
        <img className="avatar-image" src="pngtree-vector-avatar-icon-png-image_702436.jog"/>
    );
}

function Author() {
    return (
        <h3>John Doe</h3>
    )
}

function Hashtag() {
    return (
        <span>@johndoe</span>
    )
}


function Time() {
    return (
        <span>3h ago</span>
    )
}


function ReplyButton() {
    return (
        <ion-icon name="chatbox-outline"></ion-icon>
    );
}

function ShareButton() {
    return (
        <ion-icon name="share-social-outline"></ion-icon>
    );
}

function LikeButton() {
    return (
        <ion-icon name="heart-outline"></ion-icon>
    );
}


function Tweet() {
    return (
        <div className="box">
            <div className="top-bar-row">
                <Avatar/>
                <Author/>
                <Hashtag/>
                <Time/>
            </div>
            This is less than 140 characters.
            <div className="buttons-container">
                <ReplyButton/>
                <ShareButton/>
                <LikeButton/>
            </div>
        </div>

    )

}


function Greet({name}) {
    return "Hi" + name;
}

function AddressLabel({person}) {
    return "Mr." + person;
}

function SenderAddress() {
    return (
        <div className="address-container">
            <p className="address-sender-text">123 Fake St.</p>
            <p className="address-sender-text">Boston, MA 02118</p>
        </div>
    );
}

function ReciverAddress() {
    return (
        <div className="reciver-address-container">
            <p className="address-sender-text">123 Fake St.</p>
            <p className="address-sender-text">San Francisco, CA 94101</p>
        </div>
    );
}

function Stamp() {
    return (
        <div className="stamp-box">
            <p>STAMP</p>
        </div>
    )
}


function AddressBox() {
    return (
        <div className="address-box">

            <AddressLabel person="Sender"/>

            <div class="address-top-bar-row">

                <SenderAddress/>

                <Stamp/>

            </div>

            <ReciverAddress/>
        </div>

    )
}

function App() {
    return <div>
        <Tweet/>
        <AddressBox/>
        <Greet name="Dave"/>
    </div>
}


export default App;
