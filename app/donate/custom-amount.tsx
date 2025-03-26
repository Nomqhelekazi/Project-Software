"use client"

import { useEffect } from "react"

export default function CustomAmountToggle() {
  useEffect(() => {
    const customRadio = document.getElementById("amount-custom") as HTMLInputElement
    const customAmountContainer = document.getElementById("custom-amount-container")
    const customAmountInput = document.getElementById("custom-amount") as HTMLInputElement
    const amountInputs = document.querySelectorAll('input[name="amount"]')

    const toggleCustomAmount = () => {
      if (customRadio.checked) {
        customAmountContainer?.classList.remove("hidden")
        customAmountInput?.focus()
      } else {
        customAmountContainer?.classList.add("hidden")
        customAmountInput.value = ""
      }
    }

    amountInputs.forEach((input) => {
      input.addEventListener("change", toggleCustomAmount)
    })

    return () => {
      amountInputs.forEach((input) => {
        input.removeEventListener("change", toggleCustomAmount)
      })
    }
  }, [])

  return null
}

