/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723063216", {
    template: `
    <div class="flex">
        <aside id="sidebar" class="flex-1 w-64 bg-gray-100 dark:bg-gray-700 p-4 shadow-lg">
            <nav class="space-y-4">
                <a href="#" class="block text-gray-900 dark:text-white">Home</a>
                <a href="#" class="block text-gray-900 dark:text-white">About</a>
                <a href="#" class="block text-gray-900 dark:text-white">Contact</a>
            </nav>
        </aside>
        <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800 p-4">
            <div id="footer-container" class="max-w-screen-xl py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                <div id="footer-content" class="text-center mb-6">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            BlockchainScout
                        </a>

                    <nav class="flex justify-center mb-6">
                        <a href="#" class="mx-4 text-gray-900 dark:text-white">Home</a>
                        <a href="#" class="mx-4 text-gray-900 dark:text-white">About</a>
                        <a href="#" class="mx-4 text-gray-900 dark:text-white">Contact</a>
                    </nav>
                    
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                        © 2023 BlockchainScout. Discover the latest in blockchain technology. Stay ahead of the curve.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
