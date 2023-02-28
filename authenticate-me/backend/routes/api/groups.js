// Needed imports
const express = require('express')
const router = express.Router()
const { Group, Membership, GroupImage } = require('../../db/models')

// Routes
router.get('/', async (req, res, next) => {


    // Get all Groups
    const groups = await Group.findAll()

    // Loop through all Groups to count number of members and get preview image url
    for(let group of groups){
        const members = await Membership.findAll({
            where: {
                groupId: group.id
            }
        })

        group.dataValues.numMembers = members.length ? members.length : 0


        // Get Images for Group
        const images = await GroupImage.findAll({
            where: {
                groupId: group.id
            },
            attributes: {
                include: ['url']
            }
        })

        let previewUrl = ''
        for(let image of images){
            if(image.dataValues.preview === true){
                previewUrl = image.dataValues.url
            }
        }

        group.dataValues.previewImage = previewUrl ? previewUrl : null

    }


    return res.status(200).json({
        Groups: groups
    })


})




module.exports = router