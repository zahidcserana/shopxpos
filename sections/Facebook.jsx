const posts = [
  {
    title: "𝗦𝗵𝗼𝗽𝗫𝗣𝗢𝗦 – 𝗣𝗢𝗦 & 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshopxpos%2Fposts%2Fpfbid0qfAQUKaTKRk9h5n94v16CBUPUVXBXypGV9Dk2KgHF5LiQ4U1fVd5ggxoBUipbk4Fl&show_text=true&width=500",
  },
  {
    title: "Smart POS & Stock Control ",
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshopxpos%2Fposts%2Fpfbid02VSaEhXNKfArqrXXoaYxMKWa5ELYQ8w7WjKeVJLRuTMKQm8Yhvc13WDEoJbLPhbkal&show_text=true&width=500",
  },
];

export default function Facebook() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Latest from Facebook</h2>
          <p className="mt-4 text-slate-600 text-lg">
            <i>One Software. Total Control.</i>
          </p>
        </div>

        <div className="flex">
          {posts.map((post, index) => (
            <div key={post.title} className="aspect-[500/438] w-full max-w-[500px] mx-auto">
              <iframe
                src={post.src}
                width="500"
                height="640"
                className="w-full h-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                loading="lazy"
                title={post.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
