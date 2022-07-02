# NR9 --> https://nr9.me
Open Source Anonymous File Transfer and Link Shortener

## About
This is a small side project that I wanted to work on. It was specifically designed for Apache2 Servers

If you'd like to make changes to make this project available on other servers, then check out the contributing page!

<a href="https://docs.nr9.me/contributing" target="_blank">Contributing to NR9</a>

# NR9 (Using terminal)

> **IMPORTANT:**
> 
> **We do not currently support file sharing via terminal, this is coming soon!**
> 
> *Stay updated [here](https://docs.nr9.me/info)*

You can use NR9 in your terminal by installing the NR9 package.

``` console
npm install nr9
```

> After it has been installed, you can use NR9 in your terminal.

You can use the following command for help:
``` console
nr9 --help
``` 

## More details

<details>
<summary><h3 style="display: inline;">Shortening a Link or Uploading a File</h3></summary>
<p>

To shorten a link, use the command:
``` console
nr9 --L <link>
```

To upload a file, use the command:
``` console
nr9 --F <path/to/file>
```

</p>
</details>

<details>
<summary><h3 style="display: inline;">Extras</h3></summary>
<p>

To set an expiry date for a link or a file, use the argument:
``` console
--E <time in hours from now>
```

To set a password for a link or a file, use the argument:
``` console
--P <password>
```

</p>
</details>

<details>
<summary><h3 style="display: inline;">Opening and downloading Links and Files</h3></summary>
<p>

To download a file, use the command:
``` console
nr9 --D <code>
```

To open a link in a new tab, use the command:
``` console
nr9 --N <code>
```

</p>
</details>

<details>
<summary><h3 style="display: inline;">Opening and downloading Links and Files with a password</h3></summary>
<p>

To download a file with a password, use the command:
``` console
nr9 --D <code> --P <password>
```

To open a link in a new tab with a password, use the command:
``` console
nr9 --N <code> --P <password>
```

Note: it is not necessary to use the --P argument if a password was set when running this command. You will be prompted to enter the password after running the command.

</p>
</details>

<br>

## Important
- If an expiry time is not set, then the link/file will be available for 168 hours *(7 Days)* before expiring.

