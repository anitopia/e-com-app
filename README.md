This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## State management

The state management is handled by using react context for cart items. It is also stored in localStorage to persist the data and be more resilient to user interactions with the browser like having multiple tabs open. 

Generally most of the components are SSR with exception of few interactive components which are connected to the cart. That way the pages are loading and visually the same even when JavaScript is disabled, which greatly improves performance and SEO. 

Client components:  
- Cart button in the header - for getting the total count 
- Cart page - private to the user, has no initially rendered/fetched data and has no seo impact
- Buy button - used in homepage and product page


## Cart specifics
Currently the cart will be lost when the browser is restarted but that can be avoided if the cart is connected to an account. That in its own will lead to another issue with 2 separate carts that would need merging - one local and one coming from the backend after the user logs in. That way it wont be lost with time and can be initially SSR which for bigger data would have good impact on performance.

The items can only be removed from the cart page but depending on the requirements, adding the "Buy button" would be a quick task.


## A few overall missing pieces:
- Unit tests (very important for large codebase projects and big teams)
- Loading state for pages (eg. skeleton structure)
- Logging/Monitoring/Analytics
