// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract MetaNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("MetaNFT", "MNFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://Qmf7i8TuFLa6GpNbngmH2dJhifTFZDj3Ab3iDy7Dx4e3Nc/";
    }

    function promptDescription() external pure returns (string memory) {
        return "Beautiful, awesome yet unique soccer balls";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}