import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { DomainExtended } from "../generated/schema"
import { DomainExtended as DomainExtendedEvent } from "../generated/ZENS/ZENS"
import { handleDomainExtended } from "../src/zens"
import { createDomainExtendedEvent } from "./zens-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let name = "Example string value"
    let newExpiration = BigInt.fromI32(234)
    let newDomainExtendedEvent = createDomainExtendedEvent(name, newExpiration)
    handleDomainExtended(newDomainExtendedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DomainExtended created and stored", () => {
    assert.entityCount("DomainExtended", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DomainExtended",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "DomainExtended",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newExpiration",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
