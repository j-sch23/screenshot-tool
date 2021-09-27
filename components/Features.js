import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    LightningBoltIcon,
    CurrencyDollarIcon,
  } from '@heroicons/react/outline'
  
  const features = [
    { name: 'Fast and Reliable', icon: LightningBoltIcon, description: "Typical response times range between 1300-2500ms. Deployed through Vercel with 99.99% uptime." },
    { name: 'SSL Secured', icon: LockClosedIcon, description: "All requests and responses, including the hosted source are secured with SSL encryption." },
    { name: 'Free Forever', icon: CurrencyDollarIcon, description: "This service is completely free. No memberships, signup, or credit card required." },
    { name: 'Anonymous', icon: ShieldCheckIcon, description: "No API keys, accounts, email, nothing. Completely anonoymous usage." },
    { name: 'Query Options', icon: CogIcon, description: "Powerful query options lets you choose file types, cloud storage, and viewport dimensions." },
    { name: 'Cloud Storage', icon: ServerIcon, description: "Screenshots can be optionally cloud stored for 30 days on Cloudinary." },
  ]
  
  export default function Features() {
    return (
      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">Test faster</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Everything you need capture your app
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Utilize powerful query options to take programmatic screenshots of any website. Fast and free forever.  
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">
                       {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }