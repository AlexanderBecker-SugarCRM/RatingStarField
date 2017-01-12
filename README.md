# Sugar Labs Rating Star Field

Sugar Labs Rating Star Field provides a new data type in Studio. this data type will show 5 stars for the field. The stars will be filled in based on a calculated value. The values can be 1-5 (whole stars), or 1-100 (partial stars are possible). The field is read-only and is only populated by a calculation.

## Installation & Use
* Download the latest .tgz package here: https://github.com/sugarcrmlabs/RatingStarField/releases/latest
* Load the package in your target instance using Module Loader
* Log in as an admin user
* Go to Studio and add a field for the desired module
* Select the data type 'Rating (stars)'
* Click the checkbox for Calculated field and press the button 'Edit Formula'
* Enter a fomula that will result in a positive value of either 1-5, or 1-100. This can be as simple as another field on the record, or a complex calculation.
```

## Contributing
Everyone is welcome to contribute to this project! If you make a contribution, then the [Contributor Terms](CONTRIBUTOR_TERMS.pdf) apply to your submission.

Please check out our [Contribution Guidelines](CONTRIBUTING.md) for helpful hints and tips that will make it easier for us to accept your pull requests.

-----
Copyright (c) 2016 SugarCRM Inc. Licensed by SugarCRM under the Apache 2.0 license.
