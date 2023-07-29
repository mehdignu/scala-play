package filters

import javax.inject._
import play.api.http.DefaultHttpFilters
import play.filters.cors.CORSFilter

@Singleton
class CustomFilters @Inject() (corsFilter: CORSFilter)
  extends DefaultHttpFilters(corsFilter)
