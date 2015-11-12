function DownloadableMovie(){
	Movie.call(this);
};

DownloadableMovie.prototype = new Movie();

DownloadableMovie.prototype.download  = function(){
	console.log('Downloading...');
};