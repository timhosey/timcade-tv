<?php require_once 'head.php'; ?>

    <h2 id="working">Content & Community</h2>
    <p>
        <a href="https://twitch.tv/Timcade"
             target="_new">Twitch Stream</a> |
        <a href="https://youtube.com/Timcade"
             target="_new">YouTube Channel</a> |
        <a href="https://discord.gg/thearcade"
             target="_new">Community Discord</a>
    </p>
    <div class="video-embed">
        <iframe class="latestVideoEmbed"
             vnum='0'
             width="600"
             height="340"
             frameborder="0"
             allow="fullscreen;">
        </iframe>
    </div>

    <h2 id="made">Social Media</h2>
    <p>
        <a href="https://meh.social/@timcade"
             target="_new">Mastodon</a> |
        <a href="https://www.instagram.com/TheTimcade/"
             target="_new">Instagram</a> |
        <a href="https://tiktok.com/@thetimcade"
             target="_new">TikTok</a>
    </p>
    <div class="emfed">
        <a class="mastodon-feed"
            href="https://meh.social/@Timcade"
            data-toot-limit="1"
            data-exclude-replies="true"
            data-exclude-reblogs="true">
            follow me into the Fediverse
        </a>
    </div>

    <h2 id="blog">Latest Blog Posts</h2>
    <p id="blogPost" class="blog-posts"></p>

    <script src="youtubevideo.js"></script>
    <script type="module" src="https://esm.sh/emfed@1"></script>
<?php require_once 'foot.php'; ?>
