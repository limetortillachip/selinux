<h2 id="hero-title">Welcome to my page!</h2>
<div class="grid creator">
    <div class="creatorImg">
        <i class="ph-fill ph-user-circle dev-icon"></i>
    </div>
    <div class="creatorBlurb">
        <p id="desc">
            Hi. My name is Shanon and this website contains my coding projects,
            photography, and (occasional) blurbs.
        </p>
    </div>
</div>

<style>
    #hero-title {
        text-transform: uppercase;
        font-size: 1.25em;
    }
    .grid {
        display: flex;
        align-items: center;
    }

    .creator {
        background-color: aliceblue;
    }

    .creatorBlurb {
        flex: 2;
        padding-inline: 0.5em;
    }

    .creatorImg {
        flex: 0;
        padding: 0.5em 1em;
    }

    .dev-icon {
        font-size: 2em;
    }

    #desc {
        font-size: 0.85em;
    }
</style>
