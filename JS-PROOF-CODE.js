/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// created a variable to hold NFT's
let NFTs = [];

/* this function have taken in some values as parameters, created an
 NFT object using the parameters passed to it for its metadata, 
 and stored it in the variable above.*/
function mintNFT(name, favouriteSubject, mobileName){
    const NFT =  {
        "Name" : name,
        "FavouriteSubject" : favouriteSubject,
        "MobileName" : mobileName
    };
    NFTs.push(NFT);
}

/* created a "loop" that will go through an "array" of NFT's
and printed their metadata with console.log()*/
function listNFTs(){
    for(i = 0; i < NFTs.length; i++){
        console.log("We have successfully minted: " + NFTs[i].Name);
        console.log("Name: " + NFTs[i].Name);
        console.log("FavouriteSubject: " + NFTs[i].FavouriteSubject);
        console.log("MobileName: " + NFTs[i].MobileName);
        console.log("");
    }
}

// printed the total number of NFTs I have minted, to the console
function getTotalSupply(){
    console.log("Total NFTs minted : " + NFTs.length);
}

mintNFT("Srijan Kumar", "JavaScript", "Samsung");
mintNFT("Raj", "Block Chain", "IPhone");
mintNFT("Joseph", "Python", "Sony");

// functions called below this line
listNFTs();
getTotalSupply();
