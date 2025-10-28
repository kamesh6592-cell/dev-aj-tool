export const getBestProvider = async (model: string, provider?: string) => {
  const response = await fetch(`https://router.huggingface.co/v1/models/${model}`)
  const { data } = await response.json()
  let bestProvider = null;
  if (provider === "auto") {
    return "auto";
  } else {
    const providerData = data.providers.find((p: any) => p.provider === provider)
    if (providerData?.status === "live") {
      bestProvider = providerData.provider;
    } else {
      bestProvider = "auto"
    }
  }

  return bestProvider
}