// common.js

// Replace with your program ID
const programId = new solanaWeb3.PublicKey("YOUR_PROGRAM_ID"); // Add your program ID here

// Set up a connection to the Solana cluster
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'), 'confirmed');

// Function to connect wallet using Phantom wallet
async function connectWallet() {
    const { solana } = window;

    if (solana && solana.isPhantom) {
        try {
            const response = await solana.connect();
            console.log("Connected to wallet:", response.publicKey.toString());
            // Interaction with the program can be added here
            const accountInfo = await connection.getAccountInfo(response.publicKey);
            console.log("Account Info:", accountInfo);
        } catch (err) {
            console.error("Connection failed:", err);
        }
    } else {
        alert("Please install the Phantom wallet extension.");
    }
}

// Add event listener to the connect wallet button
document.getElementById("connectButton").addEventListener("click", connectWallet);
