import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  DomainExtended,
  DomainRegistered,
  FundsWithdrawn,
  PriceChanged
} from "../generated/ZENS/ZENS"

export function createDomainExtendedEvent(
  name: string,
  newExpiration: BigInt
): DomainExtended {
  let domainExtendedEvent = changetype<DomainExtended>(newMockEvent())

  domainExtendedEvent.parameters = new Array()

  domainExtendedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  domainExtendedEvent.parameters.push(
    new ethereum.EventParam(
      "newExpiration",
      ethereum.Value.fromUnsignedBigInt(newExpiration)
    )
  )

  return domainExtendedEvent
}

export function createDomainRegisteredEvent(
  name: string,
  owner: Address,
  expired: BigInt
): DomainRegistered {
  let domainRegisteredEvent = changetype<DomainRegistered>(newMockEvent())

  domainRegisteredEvent.parameters = new Array()

  domainRegisteredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  domainRegisteredEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  domainRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "expired",
      ethereum.Value.fromUnsignedBigInt(expired)
    )
  )

  return domainRegisteredEvent
}

export function createFundsWithdrawnEvent(
  to: Address,
  amount: BigInt
): FundsWithdrawn {
  let fundsWithdrawnEvent = changetype<FundsWithdrawn>(newMockEvent())

  fundsWithdrawnEvent.parameters = new Array()

  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundsWithdrawnEvent
}

export function createPriceChangedEvent(newPrice: BigInt): PriceChanged {
  let priceChangedEvent = changetype<PriceChanged>(newMockEvent())

  priceChangedEvent.parameters = new Array()

  priceChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newPrice",
      ethereum.Value.fromUnsignedBigInt(newPrice)
    )
  )

  return priceChangedEvent
}
