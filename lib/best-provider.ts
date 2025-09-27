export const getBestProvider = async (model: string, provider?: string) => {
  const response = await fetch(`https://router.huggingface.co/v1/models/${model}`)
  const { data } = await response.json()
  let bestProvider = null;
  if (provider === "auto") {
    const sortedProviders = data.providers.sort((a: any, b: any) => {
      if (a.status === "live" && b.status !== "live") return -1
      if (a.status !== "live" && b.status === "live") return 1
      return a?.pricing?.output - b?.pricing?.output + a?.pricing?.input - b?.pricing?.input
    })
    bestProvider = sortedProviders[0]
  } else {
    const providerData = data.providers.find((p: any) => p.provider === provider)
    if (providerData?.status === "live") {
      bestProvider = providerData.provider
    } else {
      bestProvider = data.providers?.find((p: any) => p.status === "live")
    }
  }


  return bestProvider
}