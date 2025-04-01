// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract ZENS {
    address owner;
    uint priceForYear;

    struct Domain {
        string name;
        address owner;
        uint256 creatingTime;
        uint256 price;
        uint yearsToBook;
    }

    mapping(string => Domain) Domains;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not a owner");
        _;
    }

    function setPriceForYear(uint _priceForYear) public onlyOwner {
        priceForYear = _priceForYear;
    }

    function setDomain(string memory _name, uint _yearToBook) public payable {
        require(
            Domains[_name].owner == address(0) ||
                block.timestamp > Domains[_name].creatingTime + 31536000,
            "This name is busy"
        );
        require(_yearToBook > 0 && _yearToBook <= 10, "Wrong number");

        uint totalPrice = _yearToBook * priceForYear;

        require(msg.value >= totalPrice, "Not enought money");

        Domains[_name] = Domain({
            name: _name,
            owner: msg.sender,
            creatingTime: block.timestamp,
            price: totalPrice,
            yearsToBook: _yearToBook
        });
    }

    function getDomain(string memory _name) public view returns (address) {
        return Domains[_name].owner;
    }

    function extandDomain(
        uint _yearsToExtand,
        string memory _name
    ) public payable {
        require(msg.sender == Domains[_name].owner, "You are not a owner");
        require(_yearsToExtand > 0, "Incorrect number");

        uint priceToExtand = priceForYear * _yearsToExtand;

        require(msg.value >= priceToExtand, "Not enought money");

        Domains[_name].yearsToBook += _yearsToExtand;
        Domains[_name].creatingTime += _yearsToExtand * 365 days;
    }

    function withdraw(uint _amount) public onlyOwner {
        require(address(this).balance >= _amount, "Wrong amount");
        require(_amount > 0, "Wrong amount");
        payable(msg.sender).transfer(_amount);
    }
}
