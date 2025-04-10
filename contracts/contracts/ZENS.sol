// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract ZENS {
    address owner;
    uint public priceForYear;

    struct Domain {
        string name;
        address owner;
        uint256 createdAt;
        uint256 expiresAt;
        uint256 price;
        uint yearsToBook;
    }

    mapping(string => Domain) Domains;

    event DomainRegistered(string name, address indexed owner, uint256 expired);
    event DomainExtended(string name, uint256 newExpiration);
    event FundsWithdrawn(address to, uint256 amount);
    event PriceChanged(uint256 newPrice);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    function setPriceForYear(uint _priceForYear) public onlyOwner {
        priceForYear = _priceForYear;
        emit PriceChanged(_priceForYear);
    }

    function setDomain(string memory _name, uint _yearToBook) public payable {
        require(
            Domains[_name].owner == address(0) ||
                block.timestamp > Domains[_name].createdAt + 31536000,
            "This name is busy"
        );
        require(_yearToBook > 0 && _yearToBook <= 10, "Wrong number");

        uint totalPrice = _yearToBook * priceForYear;

        require(msg.value >= totalPrice, "Not enought money");

        uint256 expires = block.timestamp + _yearToBook * 365 days;

        Domains[_name] = Domain({
            name: _name,
            owner: msg.sender,
            createdAt: block.timestamp,
            expiresAt: expires,
            price: totalPrice,
            yearsToBook: _yearToBook
        });

        emit DomainRegistered(_name, msg.sender, expires);
    }

    function getDomain(string memory _name) public view returns (address) {
        return Domains[_name].owner;
    }

    function extendDomain(
        uint _yearsToExtend,
        string memory _name
    ) public payable {
        require(msg.sender == Domains[_name].owner, "You are not a owner");
        require(_yearsToExtend > 0, "Incorrect number");

        uint priceToExtend = priceForYear * _yearsToExtend;

        require(msg.value >= priceToExtend, "Not enought money");

        Domains[_name].yearsToBook += _yearsToExtend;
        Domains[_name].expiresAt += _yearsToExtend * 365 days;

        emit DomainExtended(_name, Domains[_name].expiresAt);
    }

    function withdraw(uint _amount) public onlyOwner {
        require(address(this).balance >= _amount, "Wrong amount");
        require(_amount > 0, "Wrong amount");
        payable(msg.sender).transfer(_amount);

        emit FundsWithdrawn(msg.sender, _amount);
    }
}
